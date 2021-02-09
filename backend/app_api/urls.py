from .views import AboutPage, HomePage
from django.urls import path

urlpatterns = [
    path('home/', HomePage.as_view()),
    path('about/', AboutPage.as_view()),
]
