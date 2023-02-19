import {
  HStack,
  Heading,
  IconButton,
  Link,
  Tooltip,
  Container,
  chakra,
  Button,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { useContext, useEffect, useState } from 'react';
import { FiCommand } from 'react-icons/fi';

import { CmdPaletteContext } from 'src/providers/cmd-palette-provider';
import { motion } from 'framer-motion';

const Header = () => {
  const { open: openCommandPalette } = useContext(CmdPaletteContext);
  const [shortcut, setShortcut] = useState<string>();
  const MotionButton = motion(Button);

  useEffect(() => {
    setShortcut(
      navigator.userAgent.indexOf('Mac OS X') != -1 ? 'Cmd + K' : 'Ctrl + K'
    );
  }, [setShortcut]);

  return (
    <HStack
      as='nav'
      position='sticky'
      zIndex='popover'
      top={0}
      alignItems='center'
      justifyContent='space-between'
      w='full'
      mb={16}
      py={3}
      bg='white'
      _dark={{
        bg: 'gray.800',
      }}
      insetX={0}
      transitionDuration='normal'
      transitionProperty='background'
    >
      <Container
        alignItems='center'
        justifyContent='space-between'
        display='flex'
        maxW='container.md'
        px={{ base: 4, lg: 0 }}
      >
        <Heading size='sm'>
          <Link as={NextLink} href='/'>
          {/* <svg data-v-70b83f88="" version="1.0" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100" height="100" viewBox="0 0 100 130" preserveAspectRatio="xMidYMid meet" color-interpolation-filters="sRGB" style="margin: auto;">
            <rect data-v-70b83f88="" x="0" y="0" width="100%" height="100%" fill="#ffffff" fill-opacity="1" class="background"></rect>
            <g data-v-70b83f88="" class="iconmbgsvg">
              <g fill="#333" hollow-target="textNormalTran">
                <g opacity="0.55">
                  <g>
                    <rect fill="#333" fill-opacity="0" stroke-width="2" x="0" y="0" width="112.5" height="122.02661807295564" class="image-rect"></rect>
                    <svg x="0" y="0" width="112.5" height="122.02661807295564" filtersec="colorsb7017447100" class="image-svg-svg primary" style="overflow: visible;">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.0015622725477442145 -0.000027662112188409083 92.19300079345703 100.00003051757812">
                        <path d="M76.57 55.43l-36.23-36L22 1.2A14.48 14.48 0 0 0 16.2 0C7.37 0 .19 8.1 0 18.16v43.47a18.67 18.67 0 0 0 18.43 18.91H69.2a17.86 17.86 0 0 0 10-15.92 17.4 17.4 0 0 0-2.63-9.19z" fill="#e62c5a" opacity=".8"></path>
                        <path d="M73.76 19.46H23a17.86 17.86 0 0 0-10 15.92 17.46 17.46 0 0 0 2.61 9.2l36.23 36L70.23 98.8A14.52 14.52 0 0 0 76 100c8.82 0 16-8.09 16.19-18.15V38.36a18.67 18.67 0 0 0-18.43-18.9z" fill="#0fabf6" opacity=".8"></path>
                        <path d="M15.61 44.58l36.23 36H69.2a17.86 17.86 0 0 0 10-15.92 17.4 17.4 0 0 0-2.62-9.19l-36.23-36H23a17.86 17.86 0 0 0-10 15.91 17.46 17.46 0 0 0 2.61 9.2z" fill="#501b8d" opacity=".5"></path>
                      </svg>
                    </svg>
                  </g>
                </g>
                <g transform="translate(8.645000457763672,38.258310317993164)">
                  <g data-gra="path-name" fill-rule="" class="tp-name">
                    <g transform="scale(1)">
                      <g>
                        <path d="M22.6-45.51L22.6-45.51 23.58-45.51Q27.1-45.51 29.26-39.9L29.26-39.9Q45.54-7.81 46.02-6.54L46.02-6.54 46.02-4.82Q46.02-1.94 42.21-0.19L42.21-0.19Q41.39 0 40.88 0L40.88 0 40.05 0Q36.5 0 34.31-5.81L34.31-5.81Q23.11-27.96 22.95-28.09L22.95-28.09Q10.41-2.89 9.71-1.87L9.71-1.87Q7.84 0 5.84 0L5.84 0 5.05 0Q2.16 0 0.29-3.49L0.29-3.49Q0-4.51 0-5.11L0-5.11 0-5.81Q0-7.08 3.24-13.14L3.24-13.14 18.54-43.35Q20.34-45.51 22.6-45.51ZM54.53-45.51L54.53-45.51 55.35-45.51Q58.18-45.51 60.08-42.28L60.08-42.28Q60.62-41.23 60.62-39.77L60.62-39.77 60.62-11.3 89.06-11.3Q94.07-11.3 95.21-6.44L95.21-6.44 95.21-4.92Q95.21-2.29 91.95-0.44L91.95-0.44Q91.03 0 90.23 0L90.23 0 54.27 0Q51.38 0 49.54-3.49L49.54-3.49Q49.19-4.41 49.19-5.11L49.19-5.11 49.19-40.21Q49.19-43.67 53.26-45.32L53.26-45.32Q53.96-45.51 54.53-45.51Z" transform="translate(0, 45.5099983215332)"></path>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <defs v-gra="od"></defs>
          </svg> */}
          </Link>
        </Heading>
        <HStack alignItems='center' spacing={{ base: 0, md: 2 }}>
          <NextLink href='/projects' passHref>
            <MotionButton as={Link} size='sm' variant='ghost'>
              Projects
            </MotionButton>
          </NextLink>
          <NextLink href='/blog' passHref>
            <MotionButton as={Link} size='sm' variant='ghost'>
              Blog
            </MotionButton>
          </NextLink>
          <Tooltip label={`Command Palette (${shortcut})`}>
            <IconButton
              aria-label='toggle theme'
              icon={<FiCommand />}
              onClick={openCommandPalette}
              size='sm'
              variant='ghost'
            />  
          </Tooltip>
        </HStack>
      </Container>
    </HStack>
  );
};

export default Header;
