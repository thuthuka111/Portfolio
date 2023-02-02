import { TestBed } from '@angular/core/testing';

import { FullscreenViewerService } from './fullscreen-viewer-service.service';

describe('FullscreenViewerService', () => {
  let service: FullscreenViewerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FullscreenViewerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
