import android.util.Log
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import org.w3c.dom.Text

@Preview(showBackground = true, heightDp = 500, widthDp = 250)
@Composable
fun ListDemo() {
    simpleColumn()
//lazyColumnDemo()
}


@Composable
fun lazyColumnDemo() {
LazyColumn (content = {
    items(100, itemContent = {
        TextItem(text = "Item $it") //0 99
    })
})
}

@Composable
fun simpleColumn() {
    var scrollState = rememberScrollState()
    Column(
        modifier=  Modifier.verticalScroll(scrollState)
    ) {
        for(i in 1..100) { //1 to 100
            TextItem(text = "Item $i")
        }
    }
}

@Composable
fun TextItem(text: String){
    Log.i("Text Items-->> ", text)
    Text(text = text,
        modifier = Modifier
            .fillMaxWidth()
            .padding(16.dp),
        textAlign = TextAlign.Center,
        fontSize = 20.sp
    )
}