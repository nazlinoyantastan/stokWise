import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm= this.fb.nonNullable.group({
    username:'',
    password:'',
  })

  constructor(
    private fb:FormBuilder,
    private loginService: LoginService,
    private toastr: ToastrService,
    private router: Router,
  ){  }


  submit(){
    let username= this.loginForm.get('username')!.value;   // ! boş gelmeyeceğini garanti ediyoruz
    
    let password= this.loginForm.get('password')!.value;

    //email= this.loginForm.value.email!;

    this.loginService.login(username,password).subscribe({
      next:(value) => {  //next özelliği bir fonksiyon olsun dedik ve içerisine tanımladık
        //login başarılı cevabı döndü
        this.toastr.success('Giriş işlemi başarılı.');
        this.router.navigateByUrl('/homepage');
      },
      error: (err) => {
        this.toastr.error('Hata oluştu.');
        //this.loginForm.setValue({ email:'', password:''}); //tüm değerleri vermek gerekiyor sadece bi kısmı olmaz
        this.loginForm.patchValue({ password:''}); //sadece bir kısmı için
        console.error(err);
      }
    });

  }

}
