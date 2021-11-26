import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import CardObjetivo from './components/CardObjetivo/CardObjetivo';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://img.freepik.com/vetores-gratis/hacker-operando-uma-ilustracao-do-icone-dos-desenhos-animados-laptop-conceito-de-icone-de-tecnologia-isolado-estilo-flat-cartoon_138676-2387.jpg?size=338&ext=jpg" 
          nome="José Renato D' Andaluzia da Silva" 
          descricao="Sou desenvolvedor Front-end, graduado em sistemas de informação pelo Senac-SP. Atualmente cursando Bootcamp Full-Stack pela Labenu."
           />
        <CardObjetivo />
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>
      <div className="page-section-container">
        <CardPequeno
          imagem="https://w7.pngwing.com/pngs/152/1013/png-transparent-messaging-appl-logo-email-address-electronic-mailing-list-logo-internet-corrugated-tape.png"
          info="josedev@labenu.com"
          />
        </div>

        <div className="page-section-container">
        <CardPequeno
          imagem="https://e7.pngegg.com/pngimages/310/332/png-clipart-computer-icons-home-house-desktop-service-home-blue-logo.png"
          info="São Paulo-SP"
          />
        </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="
          data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANAAAADKCAMAAADjNz67AAACTFBMVEX///++hUwAN2jh4eIANGi+hUsERXD8/PwALWAACUsCO2yGk64pNWy0djH27ub9/f7AilO/ilW9gUYBOmi/hlG6fT64eDcAHVf4+PoDP27///sAAEgAIVkAAEIAAD8AGFVFYonyw5Xs//8AKV4AEE8AIFizcCn///WcbIgIJorHlmkAJl0GSXL1//9AXKv9rI+QUwL//9uhaBvhzb3AjV7p2c3SrYuxayHQqH8CAkwkOGk8U3/37d3iy7H59ezPpXXQy9Pg5fEAAFZ1xv9vcp3u9v/G5/8NEFn//+exZRGfcUK8m4X//9kAADrdxK/03MHv0K7p2MfXupu8w858mrFsYZpYWo2dqrs1YpA8V3nCxdpofZp9hLCgoLdqiKVqeZwtUIFCN3MiQ3ogIEnp5PKXpr+ptsKMk7XV1dj66dFkbYq+z91UdqDwwI58iqIpLmfVo2pEcY+imsIVFUeYmKyCgrJag6a60t6BV5JFP3AfIWYQFGYxLHdjquODLG5Qcrj/09pOD2gFAIDY2e//1b08e9nFrb5eVpiqttpFKV1iqfeZTk+YZYNlBVtJU7SPwON9hsqqgpO4ZYJaOl/unJx3OGqE1v8AI34HT6nK//8BB2rdpJEpZ8teHVD/4LYnAUfQkaDJfWsIHI7cs7IoXdREAUW/f6Gb6v8OA3+dSXMgRMBSo/n/w6WbX4W4c4JvYYVnVWMiP42mxf5oaL7/5JTMoVDnqEb/+LujgHLCji+ohDnTnCuKThuVX1K9rK6jTgb6xXGnenTq75/9yW9ySMmVAAAd3ElEQVR4nO1di38bxZ2flbXalZyV96F9yZJXieQ1SAl1/JLkt0yM44TEthKcYidxcGMnTkicFo42cltKQ3OUcqX07oDCFXr07rjri2uPV2go9O4fu5l9S9ZjtZYS7j75QWxpvTsz3/29fzOzCzr+nxF4QA/oAT2gB+SeCML4HQ6HhwdPFnPpoSGGpmmcGRrKFU8ODhPhyfs7wmbIQBMeXyimMT6bzaoCzwsUBX+ykHhKzc6rlDp8n4fpljQ04Yn9UwyrUjxkCcYLAosN5XIjiwsTSwYtFHPh+z3SxmTI2RJDMywFQTA0xqvz+MjE1tLw/4HhVxKh/VuiBShVfISJsKyQZU9Ohh1QCJss+F9VQsMLj+dUCsfZCMNAdRHSS13WXyF1ERIk01pon7tAV43m7jehYS6NRLI8hmE0g1ECkzvp/LNUkx11/nR/KZdmszgTgXjYLF8sSrvPkE6dPnLkyBPLy8tjy8tPwI+nN7+KMXGXdoNHaJ7CGMgeDM8yC+PokENLiDOJr68n/T4fmcnEYiKk3lgmk/T5/Mn1ryfOmOCJr4L8oTFHizzLIzgMy1JDw1HgQCNJZ55MBZN+fzJJkj45gEiW9d8heDBJ+pKp4MHOgi55VRh7bwmOIrxIURgWwXAGE1gmbBzVRnZqZbU3rpB+vy/EcVyI80GeQD75tN/wAzwW4kLwMxkLBhNnVjQ7eZ9VSiqy2QjUHCzCUGx6yTiKBnXq7PVYt+iTQz4XxMlcJhi8snYOXX0/JW+CplgGR3h4Nbfk8C3PJnxBMRSQ3aAxMAUCvSkysXo/pS7KCDyDQTw0RjEoNDNV53zGHyMPNoFGJzngE8lMYBqAe+92YX/RCYrFobThMMARihYcorCW9yV9ss/fLB4NUyjp6x69PHuvEcHexnEB0+w0wwu0Ht4g4V9JxDOcz5XiVCcO/tcdWrm3kGBXOYGnNUC0gE+YgRw4lVDEAOcdjcknMnXh3L2DA0mC7KE1Y4BRaetodJlU5ArN0dBxyPFwPhI5Iz8XOBiQQ/VRcwExOXrqHoGBjDgJpUxjD8aqOnugtEUvKUmyDA6nKZI/Kaa64/l8JgSRBC6E/Pl8T3dKyZCcH6KTayCTfZnUU9K9kDsCdDEqZuIRoqYxmA5myuDIsj8T8/vFZ9ZPT3dIRngNCf3uIjoubwa+ASOIZIYM1XBVsp/s7ozeAzwSozI6HChuhHEQJBTSca9DgZAocqPrnafqupXLZ8b2yaRC1vBXHJe6UGg7k8ZpA08EU4tdRm8Xt3sdt1kOJFPJsetm1ImCzt3e3xzmqY01OaWEAtW5JCbPtRnRIs9roQEWwbNWaLCaTNkD4ny9PWObm9pfiPqhmR6qg6sbncEgyfmqqJOciW23L3aA3e9XsYgubjyvZQnw1kvbvaSJBwq+GNwsSDoaN1GZDrlQGIuTJLcbkhzKzHW0iUnI+2QNaxDhGcLA05EUZQtOJjO66RinO9Jxd6yKZKyKE5NJcaMtiAhATKkWnrRkWLfTGROPLCvJsc29dLG2riR3KxNHxsbagAjiSauGuNFCOmx4n2XFb+JRlLUNsIee4YWzl+RgFVUKKdstRwSbS5vmmqZ0PASIrqdMcSODiRWwx5wTtlnoFJXdqnQwlYm2GlGXhSfCD0l6Vmrhkf1iBkUqezVISJs6EkpyV/wAQ6GOViKCHdn6ww4Z+iOtBwOmcb3eup7AKZhNVaqS3Ju53FIe5Sz+sLyhPx2juvfh/MroSmsz56f3pXYhEmOtRLSYNewBhlPjBn9GlYDOHnGttQIO27q4T6w0DoHelkkdAbYEEw+mLhn2wOCPnEJxfou9OezhiuKriPDkWFJqCSICZqesASeiFo0OdTycL7UutaFQAztYyZOViESlNdZbYviIaeByRne6PQjEks/V6KMsVCDKyvaOKYh6iC7OJSvywEBKbAkiRrACBJrQG0zoeBTy6t6br0Gwn7FUpR4poy1ot5jV42uYz+GTugJtaPImI+dQ66qOtbGERU+b5+130LXF+jcbKVKwApEs7tU/QAUy9QcmdBM6ngKqvEMBUIjaAtAZJ5OkSb37jKNZbZpVJ55tMK0H5XQtXoEoFNvck9DBhBvnMSuC0w9FY70yYn/dAKszeDBkECeT28ZRAafNu0NjdKN5SgI1Uw6II+f2aOrSlJlwY6zRyQVFw7OvrnXrDAasUmOINDlE4Ra7MbwhIM3YpcodkpzJ7MmqDpoRD86oRi3+NFKggOKv325LACHarJC6UOyKdzggSpkaxAhT6ACMEEQO4Wl0n1oGCFzqLkfkV1a8A0oLNG5YbN3CAYASOlkpNYp2GgNqrEMGrQbLCl1yUpz1hoYAw6qlw/yibuE6IR4uE2vo4BoDYt0BgnJwJVWOSPQsdJgV8rCGRSjEtGLo5YZ62ToOdYHoWHkUJMdPebF0BFjkrc7VQb2J0RgUuNhG4/ZaKHLQ281lyuO6TPNwNJfKmkE2G9EPfUtBCvSci8tbZxRQvxeV8ukm8WkPiMAIZcQ8OJ0Na+1KcoyTxXU3EWIrAcHuNhWnqQslodA3mbJAiyCYXUd4o4gNR+kjM5NuBLilgCAlRGcOKyuJ5uAgGrGK8hFBq5JCFwRjD/GSq3vTWkAEOJRUAn4nopVm7UJYNXs2fCoA55VQSFlz11CLOQTVKOkrZ1Gzdi7NW2k3P6GDUHxcctRlHNVCK2fQ06LT0gXihaauBpMWg2iBRgcksE76At1uw45W6xC8o/syDsPAZRLNwCHADTsNYosojQCHQsmA4tpHt5xDBDilOIWOizexmAvmPLTtg3j90JFYgFy/6tZatppDiBJKWQg05t4sECDHW1EcmwZaZjqmHIy5tAiuADWrQ8jKOgCFSLGZOt2UDYjSneo55WDS777zdgACG45GYfL6nFtABJgQrDw1ouoHn1Zk8Vn37rkNIgdDYzlp2wW594L7opZVysZoakE7UsiEfL1N9N4OHYIscprugHLWLaCwHWbT6qQ5wO5TTSTz7QAEg8kLvRYifyB1ye2Vg1na7JllNEAS9NNNFfnawiECrCWdho6cdscigrGcEKMXs4EUPOjap2rUFqMAqWQj8rseEmFn3hFhSfOqCdLnu9pMONiyFLx8ZOC6I0LlxFV3lxUtFYrwQ3qv3wikmivCtotDUt65BCflTqlVq1uGQoE2AcIZ0n+mqXi9XYDAskOH5KCryQKJx20OoThOAudD4lhz/bbHbKPR5R3OlXQRWxLgJG51y0aGtbjnqQzX2VxC1TZABeeMhN9FtYQAdlwa4RmgVcbWxX1NTjW1TeTARsrhXINuBsVYcRzN4gABmeYyy01mvO0DtOIMUZPnG49rGLNy1QjLAFTz7UySzU7LtEvkCNAxFrNYxJEXGo+raOfeODuozY8eEePNZvDt4xBYUyxAoeR648mVKTvSxgVtHSsxpiSb7bVtRoEAmw5HlEw2XJYqpQUrTsB5rYXpQKrpNcdt4xCUuZBdXPD7NhulNGHGKXJaC9NyvOkJjLZxCNK6rURy8kgjQEu8o09GO7RCdje9u6x9gAjwNGnaOX+g94lGVmHCyu0wjB/Rzt7o+WbTa1/aZxQIcMpPmk0HxESj84sOQII+rXr9RPMrL9vJISJmLRKHeXidtQUa5WybEFHDyChKiXjzC0baqUPgGcvMcbExqYHdpu0+6aw2C9kRyDSVCmnURkAE2LYBZQIdDQA5uoyo+sIRUW48BVlJbXSsXeC0pUPQbje62XZBDsMoHVAqQXyVAAHQIVqA5GSjPI2yAeGCdupsfK35PtuqQx32Mq2AeK4BINsmYCyrAzpxvvk+2wioCxDWygX/QeVbTQDS9wMUejaa77WtItcVlN0DcugQq0+tFrwsC2iryBElU+T8gdS3Gpy8G9AtxcMC4/YCspp2UT618m8L0NV4WwDtQeSIg2bRXgdU1wQ7S4E6oJU5DwumXQDCvT+oJBFzDwjbBYjwsiq7ISCcYcOe1yauiiagg8FGIucENOR9MWR1QIKDQ4w67BnQdcUC1NAoOAHxeodeVkQ2BIQzWe8iZ5WyNED1b0sVQF6oOiDanluHHNry3PqGYgFq6IccgDCh1YBGHOkwLZys20Ld1q3Cj5zR1rrVYbYTkNpqQEUHIAzHPLdu6RBsexNtS1isfa6jRzrrfddJGaCkOfk3TDmaj3hvftUC5PdpTvJa7XPLAHlXWycgzgJEzEcc7fMnvZq5J00/xGUuaE7yRu1zna6P8v7MtHKRs+Zico5ABNMXsnog4oKZ4XGxC9pKe7r2yc4e+aLHHisBJczDW9bOEK39CW8ssmM5WdT3uLoEhKdrn9eAnIB8pDG5RIAw5jDcGIuPe0JElMx8KCAua9P9deyLMwXHvMpEBaCkPXdRVB0s0vaHeEFk5kP+QOwDZOTCeO1zBScgygsWjZyA/BkzoSIc28U0RGrOCyIpbnIo5D8PJAIs1bnzTkDa7EMLAMWscB1tUHTcMGi6RzwgsmoKHOm/jJ5isMTXPtneXoNmHzzHj6vOicMe518Ws85bxmQ98OiyWfUJJfV5nkW19smsU+TwqZYAeqbsTzknIih16aZXYFt1uRCpe7hitvbpTj8UYW94BBRdc6ybIp8s/2NOxZ3+VcANd9fgARk2oH2mNIf82rJGaaoOIMZhVyN8HQ9clyTLl6MVLJXTZYsUH3F6h2yuuQe5PmPt+spsIhUaxoTaJ484rEKEpz1mlYWMLXCBnl0yNU5T+nPCzH7UoYmFra3xYRedQUtpzT74g9pzeJaEOn7IOT9krCTxAihur+yXg5WAYJOLtKo909Hoh+FVgYfC5yJ4JMC0NT9E+swx1wHkNHPWovpmaSVozxoqp6sMCoSX2CyvbZpEC1dwjKHZLD7uikPPmTN4nP7Yg64RNVf7/GFnbELzzZogg67YKiSnblU/Jzy5wM9TPM/C/3hqPlsMu3zQ0j5zjlXWl9eHKaFO0Bkuc+UY680TiXbukPFVLesZh8KDg4MTg4NLYbeFiy7HLLi/V7vdkyo1UeeCtL1OAW32rHNqbeqwVxgFUp1eWqhJBDhjPoxPFvWmBwV+qc4VU1SZVfAgcwT4poNBXP26a+Od+5V03igo+A/G9SWaGB+pl7hNOJUIiwheHvWdtGd1Y00utGtABOgwVwZz5AVtOpLI1r/r4YgzJaKpetysShJYs/b6cP5Yo0nd5ogAVzMhg0GpVaCv76PqGDlIdFlKhHsozq1bcQ8HO23FQyocdMaMEtFKf9Q2zbL1FB3ttHGaOUxtOnY8lzHTFY4s7WXs1UiKmcIsfl07EOYFup4KEWCQdQaoGNtcxN1lbOfXg0ex5U9sLnQbiVaIXNOWjxZZvk5FQSO+DBBeJ/CrStcVK+xRXGzhbZJW/SbzjfWmUzDeqG9HyzIIhKiZ8hlU2pQdI6DZZv2xjHsC4aQes/WkzqAJHsMHGwxwsCxLNvbguSMJSKJhsmUuuGo/PaY1jEKrRU31DOrms0hhVKPbRagVLFpyv/NIIo1IOJCJXdJwDJ+9dO5vHmvVw39ixmQkl3lO62+cx+olQwaly8I5poGZd5I0alg4ufvmt9GBvu/c3CmVdr77vVkNEWE/6FD7qH/Vj1mfCfN75UMRCbBhMkju0bd9LmQZqvEsxlaWLtMjwW098JRIoge2ymQyvqqL2fdn8js7O3Pdcy/bZ2njtj6VkX2AqDygfR4zPJys6Ps4ojQWURtKHAiXG25aGHGDplAYC6LHuJOxZCahr74FW3P55w+BQz94IfXDA+ici4XLt7S1IDCALUzDH+jJzR2XtQTj4mV408PwR8e0dvenjXMdAztt7ocKGVunh7OMuVG9Lo0401YodPONM0kpIQYzZEZJKQdv3jxkjuBFZedH8EP09vLfQkB90y+Uth9+6RAa5Ws/LpVeHv5J/FEAXun+Ibwg+nc9jxwAX4s/cvuZmZ/CoT67s11649WCjQht8DIyIVk0lh+hOth4w7FptrCc9je85HIKips8Nnbk7DSwjdrRmWDp+es/M769NtN9oieYRxB/PjN34kT8kb/vhoAecgKa2c4Hd34Ltn48Ez/Rk+/+0QEHj1biBw2L4O/QbbaAs5irsodj8bZm59TGLOpYuXq1o0N/xKk9hn+YmUuVdhI3X4WfXyzlf3rg8D/Gd14HCzPBN14NHz+xE98FKPXmS6cKfR/kZ3506OJP8vmXHVJnmeyYUf2nWXMLWn0ioPsti+cwtk4VovLi8vv1g1++VSrl51IvS+Ch/Hu/AOCTZ3ZeBl9T3oJIwNszBiBgA5pBf3hxe+af4K+jvzzxyGMGIAI8a1SAuWRKP4CWk7IufQpdgajxVA4BapUKf/fUU6X8u4/2fTAjxuPdMwpUkZ8H3/hFdBa8824QAco7ONT98GOwqV+9O/M6gPHFP+ffO6A30gWkOdNkK7rATaZ5hnI34wPBl6V5qFrSaPVtVbp97iXNQPx6J/Uv0Q9mHj6CaPks+I88BCSBhX/VdCj/FuRcnw0IgH+bmXsfcebt7n8/YLY1ZvhUOWVsvUOmi80Bd6UVicLKEdUrrNQmOHB4pyVw+JWZ34CHZt4zj7+deut9MAuuzegceg+iPrrj4NCvfzzzW7Rk/ifdbz6mXYD2bps5sDFjG+ZRJdT1UNIVMoepzc+2EeB3c3NvwFt89JWd4G+hHOV/A5l1c/1ReDz/JgCPv1tCHHolX4I/f+8EdHh75q3XAdSoE89rRh5m3knzUTgZY9F1mqLNpfJuKFw2G4pqjp7mJ3+fnyttf/e7c93QsfbdnJkrfXe7++EDUGHyczulOPz/USRfSqmUminFbUDgD3P5ndJcsOdNzSY4YgROC+FR/VeF4UwzqU2Fc8UZdcGDFkW/v2+uVJrbfgMNcwvFdW+tvw+F6egLc6X8I2c0Her7AI699NP/dOgQAL/aNzc3t/PHPwF9+BtGKTZkbp5DWx9pF2GcSeg5RRUyh/GeKvfDT5w9e+VV3ZtEv3P2+n8ZjuW1K8sHfvBCz+vo80NnP/ge+NWRS4fAi0eeN3bC9D1x9sjPzMDPXtisGE/hSUPfH6GaGs+UWi50GD/UPBzrFtgRKfq4tHwFuZvfzeTfLzu7anAK8YyaSxiVM7pKLUKjxWSbMVSQRZW+iK6dR9SpFWoZq1loMT9u7cyV/nhz7GZcdzPaYQLltYSd3Zrnwu/7jCqFnNJyeuiCcDg2nnb1zCQbUbEsc9UsXXX3WiXUb0RvQ62BNPNqwzNhqwnzqdFBc0k8dKkYo9ZZslSd2IrqQoTHqj/y8ejg0lLNaK+64ws/dWR5+fnH3NyFTuOdBXJqzLhri9DC0bz7cEwnAgxmy2UOp6vb7g+ZAX7gs+nqY4N4LtbuxAWejaTfiHj0rTUETFOhxWYF15UBm6bKlmEgRGqVGbBPBgYGKPjvL9WaIMDjH1V77AEhoVfjucBzNennLDyaAoU13ea9+MVJqkLotOy18r58fPd4oWP82sDdWXPBiJ0/REHfR/23DDWLas/zQx+jrqsuBaPwL4smHmIIAcKbM9kmLah0BSKM3VUF+3jgOPz5yZ2B2cPzn86iTxDC0TsDnw0cnwVbd+5S8wMrYPLju3f7O7Szb3+YPYbfOvzRwGe3Gw6gkNTnAuVe2XyRQRqNiak3x1WP0kIlIharnNT7sH/g+NIg8oeH/3wXjvmd+c8PvXPn8/QUPn9sdvyjYwPHcrfAnf5Pp+b7/4IAwe88lNCpqWx/I0SbpB7BQXkzl9egh+fjNEV7W5gGJtnKgAGausraOI2U6Pg1qPv7528fAvu/mAbvfHEMRtDXcgUAPuqH8cuX/c9CQZsfKEBAxy6CTyikcR/3H69vFjYyhrylxkzzuj+LIjIW7/NWu4TxV2V5AY/wlWvio4NfIqOAw4ztTv/s43/+XIJcGhiaSmtcw/vPgT7IoBtDUyq1AgF9Cu38/LFbgPiw//ihmoBgD50ZfYVFIDhmPld1Ua8N8B4FDlGOr4iAYLZXhig6CQc4Lr2THbgNojf6bx2e/wsc5LUshDgwNAuO4v0vQUADd7Lq3c+w2xDQX2HigACBeoAI9HAvPb6Wez4wnfeiZuCYZqrTu0nlI5WIBCeiw/OMVlf7cv4P8MfAa//9xSD81kc8rn5GDbxmAoJ2AkZT45IO6HAjQASQ9nXr6pNBL0/pMvBoGs3zeyqWS/yuuJtGc0xmk9HswLHhicEbdyCHQB8/QH1+EUTD+HEYpf3PF39ATPsTUpe/ag6r4AoQbPqq8daCQGr0snn4HQ0PlHnvuyY0GmbZCkCwTd62DB9m+wco6tiAgCICaMRy0Bx8Mn/3eBGaMThsvP9YsfD4fP/x4h1k1VwA0tRHM2+cHLxgPZZYlze8uSC7Ko0IlSyCiPAFi++PTw3w1MDILHKdn6gDv0bHjuJf9Pd/im7u49QABLIFkd4d1BB/2lCHpFFFMwehjHjeqCeh9QZa14zqJYtxEmwLL687atYbR4ugDUTR8OSkEZz2zR/Ty7fRMDGpZw2T4ckuAvSF9a+TYUm7AJ7TF949f4suPZcnER7Zr4gdJh6J0X08TTFdexM4rUV2NyKYTJhreu1JrfHwx/Npp29xVKbd9lV4MoWiN07uzawBE8+k8TKaCIu35HUWUhUeQeanK3OGL79Altrz3BYc6aHropbNBUgFvWPNaGqcNiMWwfu+sDKSWIquDFShP8ArHNx4caJOruCCVte1VzRxvlTynM34ImW6DsFLpaYKoTmjXVEd2ken5naxw1uH2lXnkhn0TOCQT0xdL+ivZEFLStPWqwSbT1JrEFrYye4KGdDb8ARs3InB3bvVdpGmKKdIMRmSuQCZFK1XX6BJWtw0srSrqQZ3pCGqZhkiPFXcoxBo78O7uhHoRnEBenXhGJrBMwWumLVeBJB1NZPolmohwjBqaMl7KKK/3a/zEhdPyhCOGEwsT9tdgvG0XalBeFq7ECrMV0XECHxuL28guvzchUzQFwhxPiWYuFRwTJh1XXPcwxbKm9E6gaz3LsuAbAPOs6go24BLXYi0hhxFvMvXt0V/JnDQ7ydT4upVyZwxQz8GWZ419BYqa6vsQSWiKiyCfbIUPtwYUhlJHRdXnjyR8vu4EJkh/eKoMZ8JDDkcTqtWVEyzxvNWW080j1UGdgbNTy0BV5CIjqsrKxudT+a7RV/AlxEVn7y9/G39b11myXh4ZN4OiRmB3WqN/9k1FrQXdVc2YfTKq7mJapC6gLR8M5FYW109v7q6traWGJP9vamUyPnFoOILJI6c6QCO6zQ4OcHxzDEYxrUoPqiKaInnqygSknOaYumT1qAcJK3FFDHVc8KgnmBQEZPy6IXVc5uXdY8jOa8YTrMCZvcB42tP86GuEUlULbFjMJ6litEqkFDpfXa24KBZYw0AsK2afs2wwPO8bU1pVrjWqtVcNSlN8VU9EuweZ9n5G3ou4WrxsmXxtN+Tk8WsgDt349ACv9BuPLD1Cb6a/bbuqcoWl9xjss4bnhiiynJJnMYEvOUvpatKMD+J1LB2aGcGrgrM1ISeXLjENLx/Clf58kYZXvC067B5IlCVuKYBR0OBMR4bwdODu0KIalNj4eINyAvBsQEHEXSm/Pi9waP1Ep6CYWNlhcsxHGgheJwVePxkWKo+wYdChvBwDud59NK1SLlaRjBWLUbvFR6dtNCkJpPgmCJocxDOqyrPpEcmtsbHwyaNj49vTeTSjKqit2qxWIX84kjaIl52KeyR9uMqvTtL2g0MZ3lBhSTw2pvweF7IZlVKYPFKJAYeBtuVDN8LQnKXE6ja9s4JimYgaTxDW7rQN7qWCkZoVRjx/uiDPUIaH8nyDXmk33e81pcK4rMIzr1UnjJEIAzDYpapbfGaIDzCsCy1fxLcLzwmpCno0COOjZweiYGmgL4RvZ9wTIpO5XgV2xubGIyi0tfuj+5UErqhEyN8lnVlIKpShIWWYPEeO57apDnO8NKQKkB1j9SMiqpDgaYP41X2ZBi4j/7uAWm1NeIkjiO3j9U2yjZp5ptm0VZWNSfp199vFNVo4gZN89BrQh2vJ4ER6JZYQYCpHJ/7aihOHRpenErDlFwV2AiNyCmDxhGMp6B8Dk3tX9K3btzvIdchXW6k8PhCMY3BGCerhTzmi5F5CAQeg1FgbmJhuKkM4z6SqQtSeHJycPBkMTc0ZIR8TDo9UhwcRAFqV9mpD+gBPaAH9IAe0AP6qtL/AvK+IR6iZIO3AAAAAElFTkSuQmCC
          " 
          nome="JL Seguro System" 
          descricao="Estagiário de TI." 
          info="[Customização do sistema ERP SystemJL sob acompanhamento do supervisor.
            Desenvolvimento e melhoria dos sites da empresa, prestar suporte técnico internamente.]"
          periodo="01/2020 á 06/2020"
        />
        
        <CardGrande 
          imagem="https://cdn.coteibem.com.br/company/34031/logo/04a57a0d-273e-4afa-b2b9-4815e9deb954.jpeg" 
          nome="BGF - Consultoria em Engenharia" 
          descricao="Estagiário de TI." 
          info="[Auxiliar no atendimento de solicitações dos clientes internos e externos, acompanhar o 
          processamento de dados, auxiliar a equipe no desenvolvimento de melhorias para o sistema, 
          acompanhar a manutenção do sistema da empresa]"
          periodo="02/2018 á 09/2018"
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />     

        
        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2015/04/whatsapp-logo-1.png" 
          texto="WhatsApp" 
        />      
      </div>
    </div>
  );
}

export default App;
