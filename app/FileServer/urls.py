from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='fs-home'),
    path('folder/<path>', views.home, name='fs-home'),
    #path('api',views.api,name='fs-api'),
]
