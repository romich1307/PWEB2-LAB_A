from django.shortcuts import render
from django.core.mail import send_mail

def index(request):
    send_mail(
        subject='Hello from Django',
        message='Este es un correo de prueba usando Gmail y dotenv.',
        from_email=None,  # Tomará EMAIL_HOST_USER automáticamente
        recipient_list=['luciahilachoquellerena@gmail.com'],
        fail_silently=False,
    )
    return render(request, 'send/index.html')
