import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { CourseCatalogService } from 'src/app/business-logic/course-catalog/course-catalog.service';
import { Observable } from 'rxjs';
import { Course } from '../../../business-logic/models/course';


@Component({
  selector: 'app-course-catalog-container',
  templateUrl: './course-catalog-container.component.html',
  styleUrls: ['./course-catalog-container.component.css']
})
export class CourseCatalogContainerComponent implements OnInit {
  @Output() onFinished = new EventEmitter<boolean>();

  public courses = []
  public displayedColumns = [
    'course_code',
    'title',
    'worth',
    'grade',
    'pre',
    'honor'
  ]

  // dataSource: MatTableDataSource<any>(data);
  public dataSource: MatTableDataSource<any>
  @ViewChild(MatPaginator) paginator: MatPaginator; // For pagination
  @ViewChild(MatSort) sort: MatSort; // For Sort

  constructor(
    private router: Router,
    private cookieService: CookieService,
    private courseCatalogService: CourseCatalogService
  ) {

  }

  ngOnInit() {
    if (!this.cookieService.get('courses-token'))
      this.router.navigate(['/auth'])

    this.courseCatalogService.getCourses().subscribe(
      courses => {
        this.dataSource = new MatTableDataSource(<any>courses);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        console.log(this.dataSource.data);
      },
      error => { console.log(error) }
    )
  }

  goBack() {
    // this.onFinished.emit(false)
    this.router.navigate(['home/apps'])
  }
}