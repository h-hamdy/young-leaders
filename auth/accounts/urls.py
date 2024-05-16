from django.urls import path, include
from .views import RegisterView, LoginView, UserView, LogoutView, check_login_status
from . import views


urlpatterns = [
    path('register', RegisterView.as_view()),
    path('login', LoginView.as_view()),
    path('user', UserView.as_view()),
    path('logout', LogoutView.as_view()),
    path('check-login', check_login_status, name='check_login_status'),
    path('activate/<uidb64>/<token>', views.activate, name='activate'),
]