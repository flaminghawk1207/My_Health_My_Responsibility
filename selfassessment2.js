
        function validate(){
            x = document.forms["infoform"]["formweight"].value;
            h = document.forms["infoform"]["formheight"].value;
            y = document.forms["infoform"]["age"].value;
            z = document.forms["infoform"]["gender"].value;
            v = document.forms["infoform"]["lov"].value;
            w = document.forms["infoform"]["target"].value;
            if (x== ""){
                alert("You have not entered your Weight");
                return false;}
            if (x<0){
                alert("Weight should not be below 0");
                return false;}
            if (h== ""){
                alert("You have not entered your Height");
                return false;}
            if (h<0){
                alert("Height should not be below 0");
                return false;}
            if(y== ""){
                alert("You have not entered your Age");
                return false;}
            if (y<0){
                alert("Age should not be below 0");
                return false;}
            if(z== ""){
                alert("You have not selected your Gender");
                return false;}
            if(v== ""){
                alert("You have not selected your Lifestyle");
                return false;}
            if(w== ""){
                alert("You have not entered your Target Weight Change");
                return false;}
            if (w<0){
                alert("Target Weight should not be below 0");
                return false;}
            else{
                alert("Submission Successful");
            }
            h=h/100;
            var newbmivalue = x / (h*h);
            newbmivalue=Math.round(newbmivalue);
            document.getElementById("bmiprint").innerHTML = "Your BMI is "+newbmivalue;
            if (document.getElementById('male').checked){
                var bmr1=x*24;
                document.getElementById("bmrprint").innerHTML = "Your BMR is "+bmr1;
                if(document.getElementById('sedentary').checked){
                    var dailychar=bmr1*1.1;
                    dailychar= Math.round(dailychar * 10) / 10;
                    document.getElementById("dailyprint").innerHTML = "Your Calories for Daily Energy Expenditure is "+dailychar+" Calories";
                }
                if(document.getElementById('lactive').checked){
                    var dailychar=bmr1*1.3;
                    dailychar= Math.round(dailychar * 10) / 10;
                    document.getElementById("dailyprint").innerHTML = "Your Calories for Daily Energy Expenditure is "+dailychar+" Calories";
                }
                if(document.getElementById('mactive').checked){
                    var dailychar=bmr1*1.5;
                    dailychar= Math.round(dailychar * 10) / 10;
                    document.getElementById("dailyprint").innerHTML = "Your Calories for Daily Energy Expenditure is "+dailychar+" Calories";
                }
                if(document.getElementById('vactive').checked){
                    var dailychar=bmr1*1.7;
                    dailychar= Math.round(dailychar * 10) / 10;
                    document.getElementById("dailyprint").innerHTML = "Your Calories for Daily Energy Expenditure is "+dailychar+" Calories";
                }
            }
            if (document.getElementById('female').checked || document.getElementById('other').checked){
                var bmr2=x*22.5;
                document.getElementById("bmrprint").innerHTML = "Your BMR is "+bmr2;
                if(document.getElementById('sedentary').checked){
                    var dailychar=bmr2*1.1;
                    dailychar= Math.round(dailychar * 10) / 10;
                    document.getElementById("dailyprint").innerHTML = "Your Calories for Daily Energy Expenditure is "+dailychar+" Calories";
                }
                if(document.getElementById('lactive').checked){
                    var dailychar=bmr2*1.3;
                    dailychar= Math.round(dailychar * 10) / 10;
                    document.getElementById("dailyprint").innerHTML = "Your Calories for Daily Energy Expenditure is "+dailychar+" Calories";
                }
                if(document.getElementById('mactive').checked){
                    var dailychar=bmr2*1.5;
                    dailychar= Math.round(dailychar * 10) / 10;
                    document.getElementById("dailyprint").innerHTML = "Your Calories for Daily Energy Expenditure is "+dailychar+" Calories";
                }
                if(document.getElementById('vactive').checked){
                    var dailychar=bmr2*1.7;
                    dailychar= Math.round(dailychar * 10) / 10;
                    document.getElementById("dailyprint").innerHTML = "Your Calories for Daily Energy Expenditure is "+dailychar+" Calories";
                }
            }
        }