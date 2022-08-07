import { Text } from 'react-native'
import * as S from  './styles'
import LogoSvg from '../../assets/logo.svg'
import { RFValue } from 'react-native-responsive-fontsize'


export function Home() {

  return (
    <>
      <S.Header>

          <LogoSvg width={RFValue(110)} height={RFValue(32)} />

        </S.Header>
      <S.Container>
        <Text>Home</Text>
      </S.Container>
    </>
  )
}