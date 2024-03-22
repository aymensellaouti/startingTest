

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { CvService } from './cv.service';
import { TestBed } from '@angular/core/testing';
import { Cv } from '../cv';
import { APP_API } from 'src/app/config/api.config';
import { DATA_CV_TEST } from 'src/app/unitTest/fixtures/cvs-data.test';

fdescribe('Cv Service', () => {
  let cvService: CvService;
  let http : HttpTestingController;
  let cvs: Cv[] = [];
  beforeEach(() => {
    //Arrange
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    cvService = TestBed.inject(CvService);
    http = TestBed.inject(HttpTestingController);
  })

  it('should return all cvs', () => {
    /*
    Appelez la méthode testée qui envoie des requêtes HTTP.

    Répondre à ces requêtes avec de fausses données.
    Vérifier le résultat de l'appel de la méthode
    Vérifier que toutes les requêtes ont été gérées
  */
    cvService.getCvs().subscribe((nosCvs) => {
      cvs = nosCvs;
    });
    // 2 Récupérer les requêtes en attente
    const req = http.expectOne(APP_API.cv);
    // 3 Répondre à ces requêtes avec de fausses données
    req.flush(DATA_CV_TEST.cvs);
    // 4 Vérifier que toutes les requêtes ont été gérées
    expect(req.request.method).toBe('GET');
    expect(cvs).toBeTruthy();
    expect(cvs.length).toBe(DATA_CV_TEST.cvs.length);
    expect(cvs[0].name).toBe(DATA_CV_TEST.cvs[0].name);
  })
})
