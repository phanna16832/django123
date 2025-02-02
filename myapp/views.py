from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from .forms import LoginForm

def login_view(request):
    if request.user.is_authenticated:  # Check if user is already logged in
        return redirect("home")  # Redirect to home page if logged in

    form = LoginForm()
    error_message = ""

    if request.method == "POST":
        form = LoginForm(request.POST)
        if form.is_valid():
            username = form.cleaned_data['username']
            password = form.cleaned_data['password']
            user = authenticate(request, username=username, password=password)

            if user is not None:
                login(request, user)
                return redirect("home")  # Redirect to home page after login
            else:
                error_message = "Invalid username or password."

    return render(request, "login.html", {"form": form, "error_message": error_message})

def logout_view(request):
    logout(request)
    return redirect("login")  # Redirect to login page after logout

@login_required(login_url="login")
def home_view(request):
    return render(request, "home.html")
