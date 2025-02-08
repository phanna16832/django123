from django.urls import path
from .views import *
urlpatterns = [
    path("login/", login_view, name="login"),
    path("logout/", logout_view, name="logout"),
    path("", home_view, name="home"),  # Home page (redirects after login)
    path(route="save-rp", view=save_rp , name="save_rp" ),
    path("test/", test, name='test'),
]
