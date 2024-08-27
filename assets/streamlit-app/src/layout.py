from pathlib import Path
import base64
import streamlit as st

class Layout:
    def __init__(
        self,
        homepage_url: str,
        project_name: str = "Example Project",
    ):
        self.homepage_url = homepage_url
        self.project_name = project_name


        static_dir = Path(__file__).parents[1] / "assets"
        confluence_path = static_dir / "images/confluence.svg"
        home_path = static_dir / "images/deliveredHome.svg"
        cargo_path = static_dir / "images/cargo.svg"
        css_path = static_dir / "styles/layout.css"
        custom_css = f"<style>{css_path.read_text()}</style>"
        home_logo = self.get_svg_data_url(home_path)

        self.icons = { "confluence": confluence_path, "cargo": cargo_path, "home": home_path }

        st.set_page_config(
            layout="wide",
            initial_sidebar_state="expanded",
            page_icon=home_logo,
            page_title=self.project_name
        )

        st.markdown(custom_css, unsafe_allow_html=True)

        st.html('<div class="projectHeader">'
                '<div class="logo"><img src="https://cdn.postnl.nl/images/icons/svg/logo-postnl-outline.svg" alt="Postnl.nl">'
                f'<div class="title">Data Science Portal</div></div>'
                f'<div class="source">{self.get_encoded_icon("confluence")}</div>'
                '</div>')

    def get_svg_data_url(self, path: Path) -> str:
        with path.open("rb") as file:
            return f"data:image/svg+xml;base64,{base64.b64encode(file.read()).decode()}"

    def get_encoded_icon(self, icon_name):
        svg_string = self.icons[icon_name].read_text()
        encoded_svg = base64.b64encode(svg_string.encode("utf-8")).decode("utf-8")
        return f'<img src="data:image/svg+xml;base64,{encoded_svg}"/>'