import NotFound from '../../../public/svg/NotFound'

const PageNotFound = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-8 mt-16'>
      <h2>Página não encontrada :(</h2>
      <NotFound />
    </div>
  )
}

export default PageNotFound