import { BaseAdapter } from './adapters/BaseAdapter'

export class Adapter<T> implements BaseAdapter<T> {
  upload: BaseAdapter<T>['upload']

  constructor(private base: BaseAdapter<T>) {
    this.upload = this.base.upload
  }
}
