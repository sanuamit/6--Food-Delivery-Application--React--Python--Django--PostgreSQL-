from rest_framework import viewsets
from .models import MenuItem, Order
from .serializers import MenuItemSerializer, OrderSerializer

class MenuItemViewSet(viewsets.ModelViewSet):
    queryset = MenuItem.objects.all()
    serializer_class = MenuItemSerializer

class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
