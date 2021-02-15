#!/usr/bin/env python
# -*- coding: utf-8 -*- #

AUTHOR = 'Vincent Molin'
SITENAME = 'Pendulum of Isak'
SITEURL = ''

PATH = 'content'
STATIC_PATHS = ['assets']

# Localization
TIMEZONE = 'Europe/Paris'
DEFAULT_LANG = 'en'
LOCALE = 'usa'

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

# Blogroll
LINKS = (('Pelican', 'https://getpelican.com/'),
         ('Python.org', 'https://www.python.org/'),
         ('Jinja2', 'https://palletsprojects.com/p/jinja/'),
         ('You can modify those links in your config file', '#'),)

# Social widget
SOCIAL = (('You can add links in your config file', '#'),
          ('Another social link', '#'),)

DEFAULT_PAGINATION = False

# Enabled plugins
# .ipynb support
MARKUP = ("md", "ipynb")

from pelican_jupyter import markup as nb_markup
PLUGINS = [nb_markup]
IPYNB_SKIP_CSS=True
#IPYNB_FIX_CSS =True



# Attila setting
THEME = 'themes/attila'
HOME_COLOR = 'black'
AUTHORS_BIO = {
  "zutrinken": {
    "name": "Zutrinken",
    "cover": "https://casper.ghost.org/v1.0.0/images/team.jpg",
    "image": "assets/images/avatar.png",
    "website": "http://blog.arulraj.net",
    "linkedin": "unavailable",
    "github": "arulrajnet",
    "location": "Chennai",
    "bio": "This is the place for a small biography with max 200 characters. Well, now 100 are left. Cool, hugh?"
  }
}

COLOR_SCHEME_CSS = 'github.css'
CSS_OVERRIDE = ['assets/fix.css']