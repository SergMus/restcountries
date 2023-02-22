import { LoaderService } from '../services/loader.service';

let loaderService: LoaderService;
let isLoadingSpy: jasmine.SpyObj<(value: boolean) => void>;

describe('LoaderInterceptor', () => {
  beforeEach(() => {
    loaderService = new LoaderService();
    isLoadingSpy = spyOn(loaderService.isLoading, 'next');
  });

  it('should create the service', () => {
    expect(loaderService).toBeTruthy();
  });

  it('should call isLoading.next() with true when show() is called', () => {
    loaderService.show();
    expect(isLoadingSpy).toHaveBeenCalledWith(true);
  });

  it('should call isLoading.next() with false when hide() is called', () => {
    loaderService.hide();
    expect(isLoadingSpy).toHaveBeenCalledWith(false);
  });
});
