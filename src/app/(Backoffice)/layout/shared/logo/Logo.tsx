import { useSelector } from '@/store/hooks';
import Link from 'next/link';
import { styled } from '@mui/material/styles';
import { AppState } from '@/store/store';
import Image from 'next/image';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';

export default function Logo() {
  const customizer = useSelector((state: AppState) => state.customizer);
  const LinkStyled = styled(Link)(() => ({
    height: customizer.TopbarHeight,
    margin: '10px 0 0 0',
    width:
      customizer.isCollapse && !customizer.isSidebarHover ? '50px' : '200px',
    display: 'flex',
    alignItems: 'center',
  }));

  if (customizer.activeDir === 'ltr') {
    return (
      <LinkStyled href="/">
        {customizer.isCollapse && (
          <Image
            src="/images/logos/tfac.png"
            alt="logo"
            height={65}
            width={65}
            style={{ marginLeft: '-5px' }}
            priority
            quality={100}
          />
        )}
        <Box sx={{ mt: 2 }} display={customizer.isCollapse ? 'none' : 'block'}>
          <Typography
            variant="h6"
            fontSize={'0.9rem'}
            align="center"
            color={'warning.dark'}
          >
            <Box
              component="span"
              color={'warning.dark'}
              display={'flex'}
              alignItems={'center'}
            >
              <Image
                src="/images/logos/tfac.png"
                alt="logo"
                height={50}
                width={50}
                quality={100}
                priority
              />
              <Box
                display={'flex'}
                flexDirection={'column'}
                alignItems={'flex-start'}
                ml={1}
              >
                <Typography
                  variant="h1"
                  fontSize={'2rem'}
                  color={'#0085db'}
                  fontWeight={'bold'}
                >
                  Starter
                </Typography>
                <Typography
                  variant="subtitle1"
                  color={'#fc8421'}
                  fontWeight={'bold'}
                  mt={-1}
                >
                  NextJS
                </Typography>
              </Box>
            </Box>
          </Typography>
        </Box>
      </LinkStyled>
    );
  }

  return (
    <LinkStyled href="/">
      {customizer.activeMode === 'dark' ? (
        <Image
          src="/images/logos/tfac.png"
          alt="logo"
          height={customizer.TopbarHeight}
          width={70}
          priority
        />
      ) : (
        <Image
          src="/images/logos/tfac.png"
          alt="logo"
          height={customizer.TopbarHeight}
          width={70}
          priority
        />
      )}
    </LinkStyled>
  );
}
