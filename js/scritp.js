const DarkSwitch = document.querySelector('.dark__switch')
const DarkButton = document.querySelector('.button')

const ColorsDark={
  Toggledark: 'linear-gradient(to right,hsl(210, 78%, 56%) , hsl(146, 68%, 55%))',
	Bgdark: 'hsl(230, 17%, 14%)',
	Toppatterndark: 'hsl(232, 19%, 15%)',
	Darkbgcard: 'hsl(228, 28%, 20%)',
	Darktext: 'hsl(228, 34%, 66%)',
	White: 'hsl(0, 0%, 100%)',
  hoverdark: 'hsl(228,28%,30%)',
}
const ColorsLight = {
  Toggle: 'hsl(230, 22%, 74%)',
	Bglight: 'hsl(0, 0%, 100%)',
	Toppatternlight: 'hsl(225, 100%, 98%)',
	Ligthbgcard: 'hsl(227, 47%, 96%)',
	Ligthtext: 'hsl(228, 12%, 44%)',
	Lighttexttitle: 'hsl(230, 17%, 14%)',
	hover: 'hsl(230, 22%, 74%)',
}

const DarkModeChange = ()=>{
  if(!DarkButton.classList.contains('activeDark')){
    DarkButton.classList.add('activeDark')
    document.documentElement.style.setProperty('--Ligth-bg-card',ColorsDark.Darkbgcard)
    document.documentElement.style.setProperty('--Bg-light',ColorsDark.Bgdark)
    document.documentElement.style.setProperty('--Light-text-title',ColorsDark.White)
    document.documentElement.style.setProperty('--Toogle',ColorsDark.Toggledark)
    document.documentElement.style.setProperty('--hover',ColorsDark.hoverdark)
    document.documentElement.style.setProperty('--Toggle',ColorsDark.Toggledark)
  }else{
    DarkButton.classList.remove('activeDark')
    document.documentElement.style.setProperty('--Ligth-bg-card',ColorsLight.Ligthbgcard)
    document.documentElement.style.setProperty('--Bg-light',ColorsLight.Bglight)
    document.documentElement.style.setProperty('--Light-text-title',ColorsLight.Lighttexttitle)
    document.documentElement.style.setProperty('--Toogle',ColorsLight.Toggle)
    document.documentElement.style.setProperty('--hover',ColorsLight.hover)
    document.documentElement.style.setProperty('--Toggle',ColorsLight.Toggle)
  }
}

DarkSwitch.addEventListener('click',DarkModeChange);