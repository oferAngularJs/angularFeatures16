import {OnDestroy} from '@angular/core';
import {ReplaySubject} from 'rxjs';

export function unsignedOnDestroyed(component: OnDestroy) {
  const oldNgOnDestroy = component.ngOnDestroy;
  const onDestroySubject$ = new ReplaySubject<void>(1);

  component.ngOnDestroy = () => {
    oldNgOnDestroy.apply(component);
    onDestroySubject$.next(undefined);
    onDestroySubject$.complete();
  };

  return onDestroySubject$;
}
