import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormControl, FormBuilder ,Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})

export class CadastroComponent implements OnInit {
  constructor(public authService: AuthService) { }
  
  email :any;
  senha :any;

  ngOnInit(): void {  }

  cadastrarLogin(){
    this.authService.signUpEmail(this.email, this.senha);
  }
  
  emailFormControl = new FormControl('', [Validators.required]);
  senhaFormControl = new FormControl('', [Validators.required]);
  confirmSenhaFormControl = new FormControl('', [Validators.required]);
  cpfFormControl = new FormControl('', [Validators.required, Validators.maxLength(11)]);
  cepFormControl = new FormControl('', [Validators.required, Validators.maxLength(8)]);
  
}
