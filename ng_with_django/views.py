from django.views.generic import View
from django.http import HttpResponse


class Home(View):
    def get(self, request):
        return HttpResponse("Welcome")
