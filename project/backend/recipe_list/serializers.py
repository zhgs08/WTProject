from rest_framework import serializers

from recipe_list.models import *

class RecipeSerializer(serializers.ModelSerializer):
  
  class Meta:
      model = Recipe
      fields = "__all__"


# class CommentSerializer (serializers.ModelSerializer):

#     class Meta:
#         model = Comment
#         fields = "__all__"

# class UserSerializer (serializers.ModelSerializer):

#     class Meta:
#         model = User
#         fields = "__all__"


# class ListSerializer (serializers.ModelSerializer):

#     class Meta:
#         model = List
#         fields = "__all__"