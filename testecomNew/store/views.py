from django.shortcuts import render,redirect,get_object_or_404
from django.http import HttpResponse
from django.views.decorators.http import require_POST
from .models import *

# Create your views here.
def storepage(request):
    products=Product.objects.all()
    return render(request,'index.html',{'products':products})
    

# def cart_add(request,product_id):
#     cart=OrderItems(request)
#     product=get_object_or_404(Product,id=product_id)
#     form=CartAddCartProductForm(request.POST)
#     if form.is_valid():
#         cd=form.cleaned_data
#         cart.add(product=product,quantity=cd['quantity'])
#     return redirect('cart_details')
