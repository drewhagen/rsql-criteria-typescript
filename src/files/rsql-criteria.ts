import { RSQLFilterList } from './rsql-filter-list';
import { RSQLOrderByList } from './rsql-order-by-list';

export class RSQLCriteria {
  public orderBy: RSQLOrderByList;
  public filters: RSQLFilterList;

  constructor(
    private whereKeyword: string = '$where',
    private orderByKeyword: string = '$orderBy'
  ) {
    this.filters = new RSQLFilterList();
    this.orderBy = new RSQLOrderByList();
  }

  public build(): string {
    let queryStringParts: string[] = [];
    let whereClause = this.filters.build();
    if (whereClause !== '') {
      queryStringParts.push(`${this.whereKeyword}=${whereClause}`);
    }
    let orderByClause = this.orderBy.build();
    if (orderByClause !== '') {
      queryStringParts.push(`${this.orderByKeyword}=${orderByClause}`);
    }
    return queryStringParts.join('&');
  }
}