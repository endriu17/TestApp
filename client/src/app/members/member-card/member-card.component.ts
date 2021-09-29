import { Component, Input, OnInit } from '@angular/core';
import { Member } from 'src/app/_models/members';
import { faUser, faHeart, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { MembersService } from 'src/app/_services/members.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.css']
})
export class MemberCardComponent implements OnInit {
  faUser = faUser;
  faHeart = faHeart;
  faEnvelope = faEnvelope;
  @Input() member: Member;

  constructor(private memberService: MembersService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  addLike(member: Member) {
    this.memberService.addLike(member.username).subscribe(() => {
      this.toastr.success('You have liked ' + member.knownAs);
    })
  }

}
