import { Component, Input } from "@angular/core";

@Component({
    selector: 'ins-loader',
    templateUrl: './loader.component.html',
    styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {
    @Input() message: string;
}
