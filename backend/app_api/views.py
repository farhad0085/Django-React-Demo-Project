from rest_framework.response import Response
from rest_framework.views import APIView


class HomePage(APIView):
    def get(self, request):
        return Response({"message": "This is home page response"})


class AboutPage(APIView):
    def get(self, request):
        return Response({"message": "This is about page response"})