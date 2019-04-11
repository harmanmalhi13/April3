        var XHobj = false;
        if(window.XMLHttpRequest)
        {
            XHobj = new ActiveXObject("Microsoft.XMLHTTP");
        }
        else if(window.ActiveXObject){
            XHobj = new ActiveXObject("Microsoft.XMLHTTP");
            function fetchdata(datasourcedivID)
            {
                if(XHobj)
                {
                    XHobj.open("GET",datasource);
                    XHobj.onreadystatechange=function()
                    {
                        if(XHobj.readyState==4 && XHobj.status==200)
                        {}
                    }
                    document.getElementById(divID).innerHTML=Xobj.responseText;
                }
            }
            Xobj.send(null);
        }
        