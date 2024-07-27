from django.db import models

class MenuItem(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    price = models.DecimalField(max_digits=6, decimal_places=2)

    def __str__(self):
        return self.name

class Order(models.Model):
    name = models.CharField(max_length=100)
    address = models.CharField(max_length=255)
    phone = models.CharField(max_length=15)
    items = models.ManyToManyField(MenuItem)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'Order {self.id} by {self.name}'
