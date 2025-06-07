from django.http import HttpResponse
from django.views.generic import View
from .utils import render_to_pdf

class GeneratePDF(View):
    def get(self, request, *args, **kwargs):
        context = {
            "invoice_id": 123,
            "customer_name": "John Cooper",
            "amount": 1399.99,
            "today": "Today",
        }

        pdf = render_to_pdf('invoice.html', context)  # Ya renderiza internamente
        if pdf:
            response = HttpResponse(pdf, content_type='application/pdf')
            filename = "Invoice_%s.pdf" % ("12341231")
            
            download = request.GET.get("download")  # Si en la URL hay ?download=1 se descarga
            if download:
                content = f"attachment; filename='{filename}'"
            else:
                content = f"inline; filename='{filename}'"
            response['Content-Disposition'] = content
            return response

        return HttpResponse("Not Found")
