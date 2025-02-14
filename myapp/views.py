from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from .forms import LoginForm
from datetime import datetime

def login_view(request):
    if request.user.is_authenticated:
        return redirect("home")

    form = LoginForm(request.POST or None)
    error_message = ""

    if request.method == "POST" and form.is_valid():
        user = authenticate(
            request, 
            username=form.cleaned_data['username'], 
            password=form.cleaned_data['password']
        )
        if user:
            login(request, user)
            return redirect("home")
        error_message = "Invalid username or password."

    return render(request, "login.html", {"form": form, "error_message": error_message})

def logout_view(request):
    return redirect("login")

@login_required(login_url="login")
def home_view(request):
    return render(request, "home.html", {"date": datetime.now().date()})

@login_required(login_url="login")
def test(request):
    return render(request, "test.html")

@login_required(login_url="login")
def save_rp(request):
    return render(request, "saveReply.html")
