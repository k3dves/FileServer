from django.shortcuts import render
from django.http import HttpResponse
import os
from datetime import datetime
from django.http import JsonResponse
import base64

BasePath='/home/k3dves/Desktop/'

def GetList(path):
    def HR(size):
        sz=['','K','M','G']
        i=0
        while size>=1024:
            size/=1024
            i+=1
        return str(round(size,2))+' '+sz[i]+'B'

    Files={}
    try:
        for i,file in enumerate(os.scandir(path)):
            name=file.name
            size=HR(int(file.stat().st_size))
            dir=file.is_dir()
            modified=datetime.fromtimestamp(file.stat().st_mtime)
            path=base64.b64encode(file.path.encode()).decode() if file.is_dir() else file.path
            Files[i]={'name':name,'size':size,'dir':dir,'modified':modified,'path':path}

        return Files
    except:
        return {}

def home(request,path='L2hvbWUvazNkdmVzL0Rlc2t0b3Av'):

    decoded=base64.b64decode(path).decode()
    context={
        'Files':GetList(decoded)
    }
    return render(request,'FileServer/home.html',context)


# def api(request):
#     folder=request.GET.get('f')
#     return JsonResponse(GetList(folder))
