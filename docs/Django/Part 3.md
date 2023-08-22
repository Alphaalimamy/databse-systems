### `Writing your first Django app, part 3`

This tutorial begins where Tutorial 2 left off. We’re continuing the web-poll application and will focus on creating the public interface – “views.”


Overview¶
A view is a “type” of web page in your Django application that generally serves a specific function and has a specific template. For example, in a blog application, you might have the following views:

- Blog homepage – displays the latest few entries.
- Entry “detail” page – permalink page for a single entry.
- Year-based archive page – displays all months with entries in the given year.
- Month-based archive page – displays all days with entries in the given month.
- Day-based archive page – displays all entries in the given day.
- Comment action – handles posting comments to a given entry.

In our event application, we’ll have the following four views:

- Event “index” page – displays the latest few events.
- Event “detail” page – displays a details about an event text.
- Event 'registration' page - has a a registration button
- Submission page - registered users should be able to submit a project
- Register page - new users should able to register 
- Login page - users should be able to login

###  `Writing more views`
Now let’s add a few more views to event/views.py. These views are slightly different, because they take an argument:

```python
from django.shortcuts import HttpResponse

def home_page(request):
    return HttpResponse("Hello, world. You're at the event index.")


def event_details(request, pk):

    return HttpResponse(f"You are in page {pk} ")
```


Wire these new views into the event.urls module by adding the following path() calls:

```python
from django.urls import path

from . import views

urlpatterns = [
    path("", views.home_page, name="home"),
    path("/details/<str:pk>", views.event_details, name="event__details"),
]
```
