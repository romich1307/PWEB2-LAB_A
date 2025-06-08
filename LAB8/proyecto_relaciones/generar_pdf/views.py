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

        pdf = render_to_pdf('invoice.html', context)
        if pdf:
            response = HttpResponse(pdf, content_type='application/pdf')
            filename = "Invoice_%s.pdf" % ("12341231")

            download_param = request.GET.get("download", "").strip()
            if download_param == "1":
                content = f'attachment; filename={filename}'  # <-- sin comillas
            else:
                content = f'inline; filename={filename}'      # <-- sin comillas
            response['Content-Disposition'] = content
            return response

        return HttpResponse("Not Found")
