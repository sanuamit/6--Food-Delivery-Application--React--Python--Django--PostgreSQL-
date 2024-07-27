from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import MenuItemViewSet, OrderViewSet

router = DefaultRouter()
router.register(r'menu-items', MenuItemViewSet)
router.register(r'orders', OrderViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
