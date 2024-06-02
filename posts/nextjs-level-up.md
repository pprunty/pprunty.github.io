---
title: "Elevating your NextJS/ReactJS Project"
date: "2024-08-05"
image: "/images/cpu.jpg"
description: "A guide to levelling up your NextJS/ReactJS project using Progressive Web Apps (PWAs), React Query for caching, memoization, and more."
artwork: "Dan Williams / Pixabay.com"
---

Caching backend API queries, lazy loading data and imports, memoizing React components to prevent unnecessary re-renders, 
managing authentication statuses, offline site accessibility and ... . Nearly all the aforementioned are secondary in the developer's mind when it comes
to developing a user interface. However, these elements are crucial for creating an experience that keeps users returning back to your site. 
This guide will show you how to level up your NextJS project by integrating these essential features into your project.

```python
import logging
import os

import httpx
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from motormongo import DataBase
from starlette.middleware.sessions import SessionMiddleware

from backend.auth.router import auth_router
from backend.payments.router import payment_router
from backend.settings import settings
from backend.tracker.router import tracker_router
from backend.user.router import user_router
from backend.utils.proto_middleware import ForwardedProtoMiddleware

logger = logging.getLogger(__name__)

app = FastAPI()

# Session Middleware
app.add_middleware(
    SessionMiddleware,
    secret_key=settings.SESSION_SECRET_KEY,
    session_cookie=settings.SESSION_COOKIE_NAME,
    max_age=86400,  # Sets a max age for the cookie, in seconds
    https_only=True,  # JavaScript cannot access the cookie
    # domain=settings.DOMAIN_NAME,  # Specify the domain to which the cookie applies
    path='/',  # Specify the path to which the cookie applies,
    same_site='none'  # Essential for cookies to be sent in third-party contexts
)

app.add_middleware(ForwardedProtoMiddleware)

# CORS Middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.CORS_ALLOW_ORIGINS,
    allow_credentials=settings.CORS_ALLOW_CREDENTIALS,
    allow_methods=settings.CORS_ALLOW_METHODS,
    allow_headers=settings.CORS_ALLOW_HEADERS,
)

# Assuming `cert.pem` is your self-signed certificate
cert_path = os.path.abspath("./cert.pem")
client = httpx.AsyncClient(verify=cert_path)


# Connect to MongoDB database instance
@app.on_event("startup")
async def startup_db_client():
    await DataBase.connect(uri=settings.MONGODB_URI, db=settings.MONGODB_DB)


@app.on_event("shutdown")
async def shutdown_db_client():
    await DataBase.close()


# from fastapi import Request
#
#
# @app.get("/test_session_set")
# async def test_session_set(request: Request):
#     request.session['test'] = 'Session test successful'
#     logger.info("Session set with test value")
#     return {"message": "Session set"}
#
#
# @app.get("/test_session_get")
# async def test_session_get(request: Request):
#     session_value = request.session.get('test', 'No session found')
#     logger.info(f"Retrieved session value: {session_value}")
#     return {"session_value": session_value}


# Include auth_router in application's main router
app.include_router(auth_router)
app.include_router(tracker_router)
app.include_router(user_router)
app.include_router(payment_router)

```

## Caching

### hello

1. **Caching backend queries**: How to use React useQuery for caching backend API requests.
2. **Progressive Web Apps**: How to set-up a service worker for caching 

