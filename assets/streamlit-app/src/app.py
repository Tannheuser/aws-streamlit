import base64

import streamlit as st

from layout import Layout

def get_encoded_icon(icon_name):
    svg_string = st.session_state.layout.icons[icon_name].read_text()
    encoded_svg = base64.b64encode(svg_string.encode("utf-8")).decode("utf-8")
    return f'<img src="data:image/svg+xml;base64,{encoded_svg}"/>'

def get_project_html(project):
    return (f'<div class="project">'
            f'<div class="icon">{get_encoded_icon("cargo")}</div>'
            f'{project["name"]}'
            f'</div>')


if "layout" not in st.session_state:
    st.session_state.layout = Layout(
        project_name="Awesome Streamlit", homepage_url="COMPLETE_HOMEPAGE_URL"
    )

projects = [
    {"name": "Linehaul Optimization", "stage": "dev", "url": "New York"},
    {"name": "Automated Case Processing", "stage": "acc", "url": "San Francisco"},
    {"name": "Retail Forecast", "stage": "prd", "url": "Chicago"},
    {"name": "Electric Fleet Charging", "stage": "dev", "url": "New York"},
    {"name": "CBS Lead Generation", "stage": "acc", "url": "San Francisco"},
    {"name": "GenAI For Finance", "stage": "prd", "url": "Chicago"},
    {"name": "MLOps Template", "stage": "prd", "url": "Chicago"},
]

projectsHtml = ""

for project in projects:
    projectsHtml += get_project_html(project)

st.html(f'<div class="projects">{projectsHtml}</div>')

