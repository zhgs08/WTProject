from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt

from rest_framework.parsers import JSONParser

from recipe_list.models import Recipe
from recipe_list.serializers import RecipeSerializer

@csrf_exempt
def recipes(request):
    if request.method == "GET":
      recipes = Recipe.objects.all()
      ser = RecipeSerializer(recipes, many=True)
      return JsonResponse(ser.data, safe=False)

    elif request.method == "POST":
        data = JSONParser().parse(request)
        ser = RecipeSerializer(data=data)
        if ser.is_valid():
            ser.save()
            return JsonResponse(ser.data, status=201)
    return JsonResponse(ser.errors, status=400)

@csrf_exempt
def recipes_details(request, recipe_id):

  try:
    recipe = Recipe.objects.get(pk=recipe_id)
  except Exception as e:
    return JsonResponse({"error": str(e)}, status=404)

  if request.method == "GET":
    ser = RecipeSerializer(recipe)
    return JsonResponse(ser.data) 
  elif request.method == "PUT":
    data = JSONParser().parse(request)
    ser = RecipeSerializer(recipe, data)
    if ser.is_valid():
      ser.save()
      return JsonResponse(ser.data)
  elif request.method == "DELETE":
    recipe.delete()
    ser = RecipeSerializer(recipe)
    return JsonResponse(ser.data)

# @csrf_exempt
# def myrecipe_list(request, user_id):
#     if request.method == "GET":
#         user = User.objects.get(pk=user_id)
#         recipes = user.recipes.all()
#         ser = TupleSerializer(recipes, many=True)
#         return JsonResponse(ser.data, safe=False)

#     elif request.method == "POST":
#         data = JSONParser().parse(request)
#         ser = TupleSerializer(data=data)
#         if ser.is_valid():
#             ser.save()
#             return JsonResponse(ser.data, status=201)

#     return JsonResponse(ser.errors, status=400)


# @csrf_exempt
# def comment_list(request):
#     if request.method == "GET":
#         comments = Comments.objects.all()
#         ser = CommentSerializer(discussions, many=True)
#         return JsonResponse(ser.data, safe=False)

#     elif request.method == "POST":
#         data = JSONParser().parse(request)
#         ser = CommentSerializer(data=data)
#         if ser.is_valid():
#             ser.save()
#             return JsonResponse(ser.data, status=201)
      
#     return JsonResponse(ser.errors, status=400)


# @csrf_exempt
# def comment_details(request, recipe_id):
#     if request.method == "GET":
#         comments = Comment.objects.get(pk=recipe_id)
#         ser = CommentSerializer(comments, many=True)
#         return JsonResponse(ser.data, safe=False)

#     elif request.method == "POST":
#         data = JSONParser().parse(request)
#         ser = CommentSerializer(data=data)
#         if ser.is_valid():
#             ser.save()
#             return JsonResponse(ser.data, status=201)
#     return JsonResponse(ser.errors, status=400)



# @csrf_exempt
# def user_list(request):
#     if request.method == "GET":
#         users = User.objects.all()
#         ser = UserSerializer(users, many=True)
#         return JsonResponse(ser.data, safe=False)

#     elif request.method == "POST":
#         data = JSONParser().parse(request)
#         ser = UserSerializer(data=data)
#         if ser.is_valid():
#             ser.save()
#             return JsonResponse(ser.data, status=201)
      
#     return JsonResponse(ser.errors, status=400)

# @csrf_exempt
# def list(request):
#     if request.method == "POST":
#         data = JSONParser().parse(request)
#         ser = ListSerializer(data=data)
#         if ser.is_valid():
#             ser.save()
#             return JsonResponse(ser.data, status=201)
      
#     return JsonResponse(ser.errors, status=400)

