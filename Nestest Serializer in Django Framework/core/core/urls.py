from django.contrib import admin 
from django.urls import path, include 
from rest_framework.authtoken import views 
  
urlpatterns = [ 
    path('', include('home.urls')), 
    path("admin/", admin.site.urls), 
    
]