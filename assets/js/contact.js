function getData(){
  const name = document.getElementById("input-Name").value
  const email = document.getElementById("input-Email").value
  const phone = document.getElementById("phoneNumber").value
  const subject = document.getElementById("subject").value
  const messagen = document.getElementById("messagen").value


  if(!name){
    return alert('check name')
  } else if (!email){
    return alert('check email')
  } else if(!phone){
    return alert('check phone number')
  } else if (!subject){
    return alert('messagen')
  }

  let emailReceiver = "admin@mail.com"
  let a = document.createElement('a')
  a.href = `mailto:${emailReceiver}?subject=${subject}&body=Hello, my name ${name}, ${messagen}, this my phone number ${phone}`
  a.click()
}