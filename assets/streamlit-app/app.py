import streamlit as st
import logging
import requests

logger = logging.getLogger(__name__)
logger.setLevel(logging.DEBUG)

def main():
    greetings = get_greetings()

    st.markdown('''
    # Hello World Streamlit Demo
    ## What is our model app greetings?
    ''')
    st.markdown(f'### Greetings: {greetings}')

def get_greetings():
    response = requests.get('http://localhost:80/greetings')
    return response.json()

if __name__ == '__main__':
    main()