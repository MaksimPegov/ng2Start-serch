import{Component,Input} from "@angular/core";

@Component({
    selector:'finding-box',
    templateUrl:'finding-box.component.html'
})
export class FindingBox{
    @Input('placeholder')
    textsearch = 'Введите пойсковый запрос';

    clearbox() {
        console.log('repac')
    }
}
