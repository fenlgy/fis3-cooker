
module.exports = function(){

    var logo = ""
    if (fis.util.isWin()) {
        logo = [
            '                                      /                               ',
            '                                    #/                                ',
            '                                    ##                                ',
            '                                    ##                                ',
            '                                    ##                                ',
            '      /###       /###       /###    ##  /##       /##    ###  /###    ',
            '     / ###  /   / ###  /   / ###  / ## / ###     / ###    ###/ #### / ',
            '    /   ###/   /   ###/   /   ###/  ##/   /     /   ###    ##   ###/  ',
            '   ##         ##    ##   ##    ##   ##   /     ##    ###   ##         ',
            '   ##         ##    ##   ##    ##   ##  /      ########    ##         ',
            '   ##         ##    ##   ##    ##   ## ##      #######     ##         ',
            '   ##         ##    ##   ##    ##   ######     ##          ##         ',
            '   ###     /  ##    ##   ##    ##   ##  ###    ####    /   ##         ',
            '    ######/    ######     ######    ##   ### /  ######/    ###        ',
            '     #####      ####       ####      ##   ##/    #####      ###       ',
            '                                                                      ',
            '                                                                      '
        ].join('\n')
    } else {
        logo = [
            ' ',
            '   ██████╗     ██████╗      ██████╗     ██╗  ██╗    ███████╗    ██████╗ ',
            '  ██╔════╝    ██╔═══██╗    ██╔═══██╗    ██║ ██╔╝    ██╔════╝    ██╔══██╗',
            '  ██║         ██║   ██║    ██║   ██║    █████╔╝     █████╗      ██████╔╝',
            '  ██║         ██║   ██║    ██║   ██║    ██╔═██╗     ██╔══╝      ██╔══██╗',
            '  ╚██████╗    ╚██████╔╝    ╚██████╔╝    ██║  ██╗    ███████╗    ██║  ██║',
            '   ╚═════╝     ╚═════╝      ╚═════╝     ╚═╝  ╚═╝    ╚══════╝    ╚═╝  ╚═╝', 
            ' ' ,      
            ' ' 
        ].join('\n')
    }
   var content = [
       ' ',
      '   v' + fis.cli.info.version
     ].join('\n')
      
    console.log(content + "\n" + logo)
}