from django.urls import path
from . import views


urlpatterns = [
    # path ('comments/', views.comment_list, name="comment_list"),
    # path ('comments/<int:comment_id>/', views.comment_details, name="comment_details"),
    
    path ('recipes/', views.recipes, name="recipes"),
    path ('recipes/<int:recipe_id>/', views.recipes_details, name="recipes_details"),
    
    # path ('users/', views.user_list, name="user_list"),
    # path ('lists/', views.list, name="list"),
    
    # path ('users/<int:user_id>/recipes/', views.myrecipe_list, name="myrecipe_list"),
]