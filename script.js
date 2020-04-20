function insert(num){
        var text = document.form.textinput.value
        document.form.textinput.value = text + num
      }
      
function clean(){
        document.form.textinput.value = ""
      }
      
function calculate(){
        var text = document.form.textinput.value
        document.form.textinput.value = eval(text)
      }
      
function back(){
        var text = document.form.textinput.value
        document.form.textinput.value = text.substring(0,text.length-1)
      }
      
function calc_sin(){
        var text = document.form.textinput.value
        document.form.textinput.value = Math.sin(text)
      }
      
function calc_cos(){
      var text = document.form.textinput.value
      document.form.textinput.value = Math.tan(text)
      }
      
function calc_tan(){
      var text = document.form.textinput.value
      document.form.textinput.value = Math.cos(text)
      }
      
function calc_sqrt(){
      var text = document.form.textinput.value
      document.form.textinput.value = Math.sqrt(text)
      }
      
function calc_percent(){
      var text = document.form.textinput.value
      document.form.textinput.value = text/100
      }

function calc_deg(){
        var text = document.form.textinput.value
        var out = text * (Math.PI / 180)
        document.form.textinput.value = out
      }
      
function calc_rad(){
        var text = document.form.textinput.value
        var out = (text / 180) * Math.PI
        document.form.textinput.value = out
      }
