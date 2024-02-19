import './ListPost.css'
import ViewLargePost from './ViewLargePost/ViewLargePost'
import ViewLittlePost from './ViewLittlePost/ViewLittlePost'
import ViewMiddlePost from './ViewMiddlePost/ViewMiddlePost'

function ListPost() {

  return (
    <>
        <section className='listPost_section'>
            <div className="lastPost_item_list">
                <div className="listPost_item">
                    <div className="listPost_item_viewLargePost">
                        <ViewLargePost />
                    </div>
                    <div className="listPost_item_viewLittlePost">
                        <ViewLittlePost />
                        <ViewLittlePost />
                    </div>
                </div>
                <div className="listPost_item">
                    <div className="listPost_item_viewMiddlePost">
                        <ViewMiddlePost />
                        <ViewMiddlePost />
                    </div>
                    <div className="listPost_item_viewLittlePost">
                        <ViewLittlePost />
                        <ViewLittlePost />
                    </div>
                </div>
                <div className="listPost_item">
                    <div className="listPost_item_viewMiddlePost">
                        <ViewMiddlePost />
                        <ViewMiddlePost />
                    </div>
                    <div className="listPost_item_viewLittlePost">
                        <ViewLittlePost />
                        <ViewLittlePost />
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default ListPost