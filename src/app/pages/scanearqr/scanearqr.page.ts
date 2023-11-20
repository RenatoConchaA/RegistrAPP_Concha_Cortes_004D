import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { BarcodeScanner,ScanResult,SupportedFormat  } from '@capacitor-community/barcode-scanner';
import { InfoAlumnoQRs } from '../interfaces/interfaces';
import { ApicrudService } from 'src/app/servicios/apicrud.service';

@Component({
  selector: 'app-scanearqr',
  templateUrl: './scanearqr.page.html',
  styleUrls: ['./scanearqr.page.scss'],
})
export class ScanearqrPage implements OnInit {

  imageSource: any;
  scannedDate: string = '';
  scannedData: string = '';
  scannedSubject: string ='';
  nombre: any;

  codigo:any;

  EscanearQR:InfoAlumnoQRs={
    Nombre:'',
    Asignatura:'',
    Fecha:''
  }

  constructor(private menuController:MenuController,
    private apicrud: ApicrudService) {
    this.nombre= sessionStorage.getItem('nombre');
  }
  
  async Camara(){
    BarcodeScanner.hideBackground();
    const result: ScanResult =await BarcodeScanner.startScan({ targetedFormats: [SupportedFormat.QR_CODE] });
    console.log('Escaneando...')
    if (result.hasContent){
      this.scannedData = result.content;
      this.scannedDate = new Date().toLocaleString();
      this.scannedSubject = 'AsignarutaXYZ';
      this.EscanearQR.Nombre = this.nombre;
      this.EscanearQR.Asignatura = this.scannedData;
      this.EscanearQR.Fecha = this.scannedDate;
      this.codigo=this.scannedData;
      this.apicrud.RegistrarAsistencia(this.EscanearQR).subscribe();
      console.log(result.content,'Escaneo realizado')
    }
    else {
      console.log('Escaneo sin contenido')
    }
  }


  ngOnInit() {
  }
  mostrarMenu(){
    this.menuController.open('first');
  }

}
