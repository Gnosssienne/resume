import {Component, OnInit, ViewChild} from '@angular/core';
import data1 from './data.json';
import data2 from './resources.json';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    public resume = data1;
    public resource = data2;
    public language = 'FR';
        
    ngOnInit() {
        window.onscroll = () => this.isTop();
    }
    
    lang(content) {
        if (content) {
            const langContent = this.language === 'FR' ? content.fr : content.en;
            if (langContent) {
                return langContent;
            } else {
                return content;
            }
        }
    }
    
    isTop() {
        const scrollBtn = document.getElementById('scroll-btn');
        
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollBtn.style.display = 'block';
        } else {
            scrollBtn.style.display = 'none';
        }
    }
    
    toTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    
    scroll(el: HTMLElement) {
        el.scrollIntoView({behavior: 'smooth'});
    }
}
