from django.db import models


# class User(models.Model):
#     username = models.CharField(max_length=100)
#     password = models.CharField(max_length=100)
#     name = models.CharField(max_length=100)
#     # email = models.CharField(max_length=100)

#     def __str__(self):
#         return self.username


class Recipe(models.Model):
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=100, default='null')    
    category = models.CharField(max_length=100, default='null')
    published_date = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.title

# class List (models.Model):
#     user_id = models.ForeignKey(User, related_name="recipes", on_delete=models.CASCADE)
#     recipe_id = models.ForeignKey(Recipe, related_name="users", on_delete=models.CASCADE)


# class Comment(models.Model):
#     dis_id = models.ForeignKey(Discussion, related_name="comments", on_delete=models.CASCADE)
#     text = models.TextField()
#     created_at = models.DateTimeField(auto_now=True)
#     username = models.CharField(max_length=100, default='null')

#     def __str__(self):
#         return (self.text)