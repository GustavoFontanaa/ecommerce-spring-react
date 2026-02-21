import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Divider from '@mui/material/Divider'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import YouTubeIcon from '@mui/icons-material/YouTube'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

export const Footer = () => {
    return (
        <Box component="footer" className='mt-10'>
            <Grid
                container
                spacing={{ xs: 3, md: 4 }}
                justifyContent="space-between"
                alignItems="flex-start"
                wrap="wrap"
                sx={{ bgcolor: 'black', color: 'white', py: 6, px: { xs: 2, sm: 4 } }}
            >
                <Grid item xs={12} sm={6} md="auto" sx={{ textAlign: { xs: 'center', md: 'left' }, minWidth: { md: 220 } }}>
                    <Typography className='pb-5 text-center' variant='h6'>Company</Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                        <Button variant='text' color='inherit'>About</Button>
                        <Button variant='text' color='inherit'>Careers</Button>
                        <Button variant='text' color='inherit'>Blog</Button>
                        <Button variant='text' color='inherit'>Press</Button>
                    </Box>
                </Grid>

                <Grid item xs={12} sm={6} md="auto" sx={{ textAlign: { xs: 'center', md: 'left' }, minWidth: { md: 220 } }}>
                    <Typography className='pb-5 text-center' variant='h6'>Suporte</Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                        <Button variant='text' color='inherit'>Contato</Button>
                        <Button variant='text' color='inherit'>FAQ</Button>
                        <Button variant='text' color='inherit'>Envio</Button>
                        <Button variant='text' color='inherit'>Trocas e Devoluções</Button>
                    </Box>
                </Grid>

                <Grid item xs={12} sm={6} md="auto" sx={{ textAlign: { xs: 'center', md: 'left' }, minWidth: { md: 220 } }}>
                    <Typography className='pb-5 text-center' variant='h6'>Categorias</Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                        <Button variant='text' color='inherit'>Masculino</Button>
                        <Button variant='text' color='inherit'>Feminino</Button>
                        <Button variant='text' color='inherit'>Infantil</Button>
                        <Button variant='text' color='inherit'>Novidades</Button>
                    </Box>
                </Grid>

                <Grid item xs={12} sm={6} md="auto" sx={{ textAlign: { xs: 'center', md: 'left' }, minWidth: { md: 260 } }}>
                    <Typography className='pb-5' variant='h6'>Fique por dentro</Typography>
                    <Box sx={{ display: 'flex', gap: 1, justifyContent: { xs: 'center', md: 'flex-start' }, mb: 2 }}>
                        <IconButton color='inherit'><FacebookIcon /></IconButton>
                        <IconButton color='inherit'><InstagramIcon /></IconButton>
                        <IconButton color='inherit'><TwitterIcon /></IconButton>
                        <IconButton color='inherit'><YouTubeIcon /></IconButton>
                        <IconButton color='inherit'><LinkedInIcon /></IconButton>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 1, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                        <TextField
                            size='small'
                            placeholder='Seu e-mail'
                            variant='outlined'
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    color: 'white',
                                    '& fieldset': { borderColor: 'rgba(255,255,255,0.4)' },
                                    '&:hover fieldset': { borderColor: 'white' }
                                },
                                '& input::placeholder': { color: 'rgba(255,255,255,0.7)' },
                                width: '100%',
                                maxWidth: 260
                            }}
                        />
                        <Button variant='contained' color='primary'>Assinar</Button>
                    </Box>
                </Grid>
            </Grid>

            <Divider sx={{ bgcolor: 'rgba(255,255,255,0.15)' }} />

            <Grid container justifyContent="space-between" alignItems="center" sx={{ bgcolor: 'black', color: 'white', py: 2, px: { xs: 2, sm: 4 } }}>
                <Grid item xs={12} md={6} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                    <Typography variant='body2'>© {new Date().getFullYear()} Ecommerce. Todos os direitos reservados.</Typography>
                </Grid>

                <Grid item xs={12} md={6} sx={{ textAlign: { xs: 'center', md: 'right' } }}>
                    <Box sx={{ display: 'inline-flex', gap: 2 }}>
                        <Button variant='text' color='inherit'>Termos</Button>
                        <Button variant='text' color='inherit'>Privacidade</Button>
                        <Button variant='text' color='inherit'>Cookies</Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}
